# Access Rights

```mermaid
graph TD
    ADD_PUT_bundle["{ADD}PUT bundle"]
    ADD_POST_bundle["{ADD}POST bundle"]
    ADD_POST_bundle_search["{ADD}POST bundle search"]
    ADD_GET_bundle_by_code["{ADD}GET bundle by code"]
    ADD_02_681_View_bundle_setting["{ADD}02.681 View bundle setting"]
    ADD_02_682_Manage_bundle_setting["{ADD}02.682 Manage bundle setting"]
    ADD_GET_bundle_by_code -->|unnamed| ADD_02_681_View_bundle_setting
    ADD_POST_bundle -->|unnamed| ADD_02_682_Manage_bundle_setting
    ADD_POST_bundle_search -->|unnamed| ADD_02_681_View_bundle_setting
    ADD_PUT_bundle -->|unnamed| ADD_02_682_Manage_bundle_setting
```
