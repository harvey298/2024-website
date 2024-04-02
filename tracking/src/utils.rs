use wasm_bindgen::prelude::*;
use web_sys::{js_sys, window, Document, Element, HtmlElement};

pub fn set_panic_hook() {
    // When the `console_error_panic_hook` feature is enabled, we can call the
    // `set_panic_hook` function at least once during initialization, and then
    // we will get better error messages if our code ever panics.
    //
    // For more details see
    // https://github.com/rustwasm/console_error_panic_hook#readme
    #[cfg(feature = "console_error_panic_hook")]
    console_error_panic_hook::set_once();
}


pub fn add_element_to_dom(tag_name: &str, text_content: &str) -> Result<(), JsValue> {
    // Get the document
    let document = window()
        .unwrap()
        .document()
        .ok_or("Failed to get document")?;

    // Create a new element
    let element = document
        .create_element(tag_name)
        .map_err(|_| "Failed to create element")?;

    // Cast the generic Element to HtmlElement
    let element = element.dyn_into::<HtmlElement>()?;

    // Set the text content of the element
    element.set_text_content(Some(text_content));

    // Append the element to the document body
    let body = document.body().ok_or("Failed to get body")?;
    body.append_child(&element)?;

    Ok(())
}

pub fn add_banner(text: &str, learn_more: bool) -> Result<(), JsValue> {
    // Get the document
    let document = window()
        .unwrap()
        .document()
        .ok_or("Failed to get document")?;

    let location = window().unwrap().location();
    let href = location.href()?;

    // Create a div element for the banner
    let banner = document.create_element("div")?;
    let banner = banner.dyn_into::<HtmlElement>()?;
    banner.set_class_name("banner");

    let content = document.create_element("p")?;
    let content = content.dyn_into::<HtmlElement>()?;
    content.set_text_content(Some(text));
    content.set_attribute("style", "color: black").unwrap();
    banner.append_child(&content)?;

    if !href.contains("/projects/") && learn_more {

        let ad = document.create_element("a")?;

        let mut txt = content.text_content().unwrap();
        txt += " Check out my projects!";
        content.set_text_content(Some(&txt));

        ad.set_text_content(Some(" Here!"));
        ad.set_attribute("href", "/projects/").unwrap();

        content.append_child(&ad).unwrap();
    }

    // Style the banner
    banner.set_attribute("style", "background-color: orange;position: absolute; padding-bottom: 10px; top: 0; left: 0; width: 100%;height: 50px;").unwrap();

    // Create a button element to close the banner
    let close_button = document.create_element("button")?;
    let close_button = close_button.dyn_into::<HtmlElement>()?;
    close_button.set_text_content(Some("X"));
    close_button.set_attribute("style", "position: absolute; top: 5px; right: 10px;").unwrap();

    // Add an event listener to remove the banner when the button is clicked
    let banner_clone = banner.clone();
    let callback = Closure::wrap(Box::new(move || {
        banner_clone.remove();
    }) as Box<dyn Fn()>);
    close_button.set_onclick(Some(callback.as_ref().unchecked_ref()));
    callback.forget();

    // Append the close button to the banner
    banner.append_child(&close_button)?;

    // Append the banner to the document body
    // let body = document.body().ok_or("Failed to get body")?;
    let body = document.get_element_by_id("app").unwrap();
    body.prepend_with_node_1(&banner)?;

    Ok(())
}

pub fn set_cookie(name: &str, value: &str, expiration_days: i32) -> Result<(), JsValue> {
    // Get the document
    let document = window()
        .unwrap()
        .document()
        .ok_or("Failed to get document")?;

    // Calculate expiration time
    let expiration = if expiration_days != 0 {
        let date = js_sys::Date::new_with_year_month_day(0, 0, expiration_days);
        format!("{}",date.to_utc_string())
    } else {
        "".to_string()
    };

    // Construct the cookie string
    let cookie_string = format!("{}={}; expires={}", name, value, expiration);

    // Set the cookie
    // document.set_cookie(&cookie_string)?;

    Ok(())
}
