mod utils;

use serde_json::json;
use utils::add_banner;
use utils::add_element_to_dom;
use web_sys::window;
use web_sys::Location;
use web_sys::console;
use wasm_bindgen::prelude::*;
use serde_json::Value;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, tracking!");
}

#[wasm_bindgen]
pub async fn check_url_argument() -> Result<(), JsValue> {
    // Get the current URL
    let location = window().unwrap().location();
    let href = location.href()?;

    // Parse the URL
    // let url = web_sys::Url::new(&href)?;

    for arg in href.split("?") {

        if arg.is_empty() { continue; }

        // console_log(&format!("Argument: {}", arg));

        let mut argument = arg.split("=");

        let Some(key) = argument.next() else { continue };
        let key = key.chars().next().unwrap();
        let Some(value) = argument.next() else { continue };

        match key {
            't' => {
                if value == "company_test" {
                    add_banner("Hello [COMPANY NAME]!", false)?;
                } else {
                    let url = "http://hoovy.co.uk/api/stat";
                    
                    let client = reqwest::Client::new();

                    let response = client.post(url)
                        .json(&json!({"method": "hit", "data": [value]}))
                        .send()
                        .await;

                    let Ok(response) = response else { console_log("HTTP error!"); return Ok(()); };

                    match response.json::<Value>().await {
                        Ok(response) => {

                            if let Some(data) = response.get("data") {
                                if let Some(name) = data.get("name") {
                                    let learn_more = if let Some(learn_more) = data.get("learn_more") { learn_more.as_bool().unwrap() } else { false };
                                    add_banner(&format!("Hello, {}!", name.as_str().unwrap()), learn_more)?;
                                }
                            }
                        },
                        Err(e) => {
                            console_log(&format!("Error: {}", e));
                        }
                    }

                }               

            }

            _ => {}
        }
    }

    Ok(())
}

// Helper function to log messages to the browser console
fn console_log(s: &str) {
    console::log_1(&JsValue::from_str(s));
}
