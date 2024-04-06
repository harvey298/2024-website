mod utils;

use serde_json::json;
use utils::add_banner;
use web_sys::window;
use web_sys::console;
use wasm_bindgen::prelude::*;
use serde_json::Value;
use web_sys::Element;
use web_sys::HtmlElement;
use web_sys::Node;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet() {
    alert("Hello, tracking!");
}

#[wasm_bindgen]
pub async fn render() -> Result<Option<String>, JsValue> {
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
            'p' => {
                if value == "company_test" {
                    add_banner("Hello [COMPANY NAME]!", false)?;
                } else {
                    // Change to local API when testing! ("http://localhost:2000/api")
                    let url = format!("https://hoovy.co.uk/api/project?p={value}");
                    
                    let client = reqwest::Client::new();

                    let response = client.get(url)
                        .send()
                        .await;

                    let Ok(response) = response else { console_log("HTTP error!"); return Ok(None); };

                    // Debug code
                    let response: Value = response.json().await.unwrap();

                    console_log(&format!("{response:?}"));

                    let name = response["name"].as_str().unwrap();

                    let document = window().unwrap().document().unwrap();

                    let tags = response["tags"].as_array().unwrap();
                    let tag_section = document.query_selector(".tags")?.unwrap();
                    for tag_data in tags {

                        console_log(&format!("{tag_data:?}"));

                        let tag = document.create_element("div")?;
                        let mut class = String::new();
                        for classes in tag_data["classes"].as_array().unwrap() {
                            class += classes.as_str().unwrap();
                            class += " ";
                        }

                        tag.set_class_name(&class);

                        tag.set_text_content(tag_data["text"].as_str() );

                        tag_section.append_child(&tag)?;
                        // let tag = document.create_element("span")?;
                        // tag.set_class_name("tag");
                        // tag.set_text_content(Some(&tag));
                        // tag_section.append_child(&tag)?;

                        let br = document.create_element("br")?;
                        br.set_text_content(None);
                        tag_section.append_child(&br)?;
                        
                    }

                    let h1 = document.query_selector("h1")?.unwrap();
                    h1.set_text_content(Some(&format!("{}", name)));

                    let bulk = response["bulk"].as_str().unwrap();

                    let html = markdown::to_html(&bulk);
                    return Ok(Some(html));
                }               

            }

            _ => {}
        }
    }

    Ok(None)
}

// Helper function to log messages to the browser console
fn console_log(s: &str) {
    console::log_1(&JsValue::from_str(s));
}
