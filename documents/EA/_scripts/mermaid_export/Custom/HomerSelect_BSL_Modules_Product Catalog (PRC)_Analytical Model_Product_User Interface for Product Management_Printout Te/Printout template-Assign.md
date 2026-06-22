# Printout template-Assign

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Printout Template Assignment/User Interface
- **Diagram ID**: 71266
- **Elements**: 9
- **Connectors**: 3

```mermaid
graph TD
    Common_product_properties_header["Common product properties header"]
    Documents_Tab_Printout_template["Documents :Tab Printout template"]
    OK["OK"]
    Cancel["Cancel"]
    DEL_02_605_Assign_printout_template_to_product["{DEL}02.605 Assign printout template to product"]
    Document_type["Document type"]
    Number_of_copies["Number of copies"]
    Printout_template["Printout template"]
    Assign_printout_templates_for_product["Assign printout templates for product"]
    Assign_printout_templates_for_product -->|unnamed| DEL_02_605_Assign_printout_template_to_product
    Cancel -->|unnamed| Documents_Tab_Printout_template
    OK -->|unnamed| Documents_Tab_Printout_template
```
