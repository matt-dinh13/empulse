# Financing Packages API

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Financing Packages
- **Diagram ID**: 162531
- **Elements**: 10
- **Connectors**: 9

```mermaid
classDiagram
    class ADD_financing_package_activations["{ADD}financing-package-activations"]
    class PUT_financing_package_activations["PUT financing package activations"]
    class GET_financing_package_versions["GET financing package versions"]
    class DELETE_financing_package["DELETE financing package"]
    class PUT_financing_package["PUT financing package"]
    class POST_financing_package["POST financing package"]
    class GET_financing_package["GET financing package"]
    class financing_package_versions["financing-package-versions"]
    class financing_packages["financing-packages"]
    class Product_catalog_API["Product catalog API"]
    GET_financing_package <|.. financing_packages : unnamed
    POST_financing_package <|.. financing_packages : unnamed
    PUT_financing_package <|.. financing_packages : unnamed
    DELETE_financing_package <|.. financing_packages : unnamed
    GET_financing_package_versions <|.. financing_package_versions : unnamed
    PUT_financing_package_activations <|.. ADD_financing_package_activations : unnamed
    Product_catalog_API ..> ADD_financing_package_activations : /financing-package-activations
    Product_catalog_API ..> financing_packages : /financing-packages
    Product_catalog_API ..> financing_package_versions : /financing-package-versions
```
