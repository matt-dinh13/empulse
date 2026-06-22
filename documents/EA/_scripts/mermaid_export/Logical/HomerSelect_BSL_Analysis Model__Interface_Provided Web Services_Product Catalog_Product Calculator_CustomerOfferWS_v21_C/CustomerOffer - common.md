# CustomerOffer - common

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Product Catalog/Product Calculator/CustomerOfferWS_v21/CustomerOffer - common
- **Diagram ID**: 157937
- **Elements**: 11
- **Connectors**: 12

```mermaid
classDiagram
    class ServiceParameter["ServiceParameter"]
    class Tariff["Tariff"]
    class FinancingPackage["FinancingPackage"]
    class FinancingScheme["FinancingScheme"]
    class CustomData["CustomData"]
    class Product["Product"]
    class Fee["Fee"]
    class Commodity["Commodity"]
    class Installment["Installment"]
    class MOD_Service["{MOD}Service"]
    class CustomerOffer["CustomerOffer"]
    Fee ..> MOD_Service : unnamed
    CustomerOffer ..> MOD_Service : unnamed
    CustomerOffer ..> Installment : unnamed
    CustomerOffer ..> Commodity : unnamed
    CustomerOffer ..> Fee : unnamed
    CustomerOffer ..> Product : unnamed
    MOD_Service ..> CustomData : unnamed
    CustomerOffer ..> FinancingScheme : unnamed
    CustomerOffer ..> FinancingPackage : unnamed
    Product ..> Tariff : unnamed
    MOD_Service ..> Tariff : unnamed
    MOD_Service ..> ServiceParameter : unnamed
```
