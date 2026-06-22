# Assign Printout Templates

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Printout Template Assignment/Use Case 
- **Diagram ID**: 162480
- **Elements**: 6
- **Connectors**: 7

```mermaid
graph LR
    User[/"User"/]
    Printout_templates_Printout_template["Printout templates : Printout template"]
    Printout_templates_Printout_template_Set["Printout templates : Printout template - Set"]
    DEL_02_070_Show_product_version_detail(("{DEL}02.070 Show product version detail"))
    DEL_02_605_Assign_printout_template_to_product(("{DEL}02.605 Assign printout template to product"))
    DEL_02_645_Remove_printout_template_from_product(("{DEL}02.645 Remove printout template from product"))
    DEL_02_605_Assign_printout_template_to_product -->|unnamed| Printout_templates_Printout_template_Set
    DEL_02_605_Assign_printout_template_to_product -->|unnamed| Printout_templates_Printout_template
    DEL_02_645_Remove_printout_template_from_product -->|unnamed| Printout_templates_Printout_template
    User --- DEL_02_645_Remove_printout_template_from_product
    User --- DEL_02_070_Show_product_version_detail
    User --- DEL_02_605_Assign_printout_template_to_product
    DEL_02_070_Show_product_version_detail -->|unnamed| Printout_templates_Printout_template
```
