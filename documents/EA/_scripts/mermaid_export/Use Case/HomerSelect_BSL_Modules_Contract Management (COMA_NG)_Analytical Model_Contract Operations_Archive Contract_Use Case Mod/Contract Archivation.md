# Contract Archivation

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Contract Management (COMA_NG)/Analytical Model/Contract Operations/Archive Contract/Use Case Model
- **Diagram ID**: 163450
- **Elements**: 9
- **Connectors**: 7

```mermaid
graph LR
    External_system[/"External system"/]
    Time[/"Time"/]
    ProxyConnector["ProxyConnector"]
    ADD_Contract_archive_via_API(("{ADD}Contract archive via API"))
    ProxyConnector["ProxyConnector"]
    DMS[/"DMS"/]
    ContractChangedEvent_ContractChangedEvent["ContractChangedEvent : ContractChangedEvent"]
    ADD_Contract_archive["{ADD}Contract archive"]
    ADD_Contract_archive(("{ADD}Contract archive"))
    ADD_Contract_archive_via_API -->|unnamed| ADD_Contract_archive
    ADD_Contract_archive_via_API --- DMS
    ADD_Contract_archive --- DMS
    ContractChangedEvent_ContractChangedEvent -->|unnamed| ProxyConnector
    ContractChangedEvent_ContractChangedEvent -->|unnamed| ProxyConnector
    External_system --- ADD_Contract_archive_via_API
    Time --- ADD_Contract_archive
```
