# Tab Printout template

```mermaid
graph TD
    DEL_02_645_Remove_printout_template_from_product["{DEL}02.645 Remove printout template from product"]
    DEL_02_070_Show_product_version_detail["{DEL}02.070 Show product version detail"]
    DEL_02_605_Assign_printout_template_to_product["{DEL}02.605 Assign printout template to product"]
    Documents_Printout_template_Assign["Documents :Printout template-Assign"]
    Assign_template["Assign template"]
    Printout_templates["Printout templates"]
    Printout_templates["Printout templates"]
    Printout_templates -->|unnamed| Documents_Printout_template_Assign
    Assign_template -->|unnamed| Documents_Printout_template_Assign
    Printout_templates -->|unnamed| DEL_02_605_Assign_printout_template_to_product
    Assign_template -->|unnamed| DEL_02_605_Assign_printout_template_to_product
    Printout_templates -->|unnamed| DEL_02_070_Show_product_version_detail
    Printout_templates -->|unnamed| DEL_02_645_Remove_printout_template_from_product
```
