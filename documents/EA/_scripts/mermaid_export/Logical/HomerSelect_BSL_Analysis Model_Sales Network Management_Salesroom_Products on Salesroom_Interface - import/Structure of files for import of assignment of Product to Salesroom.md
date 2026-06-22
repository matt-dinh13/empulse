# Structure of files for import of assignment of Product to Salesroom

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/Products on Salesroom/Interface - import
- **Diagram ID**: 39240
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class errorType["errorType"]
    class salesroomType["salesroomType"]
    class salesroom2ProductType["salesroom2ProductType"]
    class hsSalesroom2ProductFileType["hsSalesroom2ProductFileType"]
    hsSalesroom2ProductFileType --> salesroom2ProductType : unnamed
    salesroom2ProductType ..> salesroomType : unnamed
    salesroom2ProductType ..> errorType : unnamed
```
