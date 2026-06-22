# listSearchTypes

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Interface Provided/Web Services/Ticketing API/types/listSearchTypes
- **Diagram ID**: 159963
- **Elements**: 5
- **Connectors**: 2

```mermaid
classDiagram
    class ADD_SearchType["{ADD}SearchType"]
    class SearchType["SearchType"]
    class n_200["200"]
    class n_400["400"]
    class search_types["/search-types"]
    search_types ..> n_400 : unnamed
    search_types ..> SearchType : unnamed
```
