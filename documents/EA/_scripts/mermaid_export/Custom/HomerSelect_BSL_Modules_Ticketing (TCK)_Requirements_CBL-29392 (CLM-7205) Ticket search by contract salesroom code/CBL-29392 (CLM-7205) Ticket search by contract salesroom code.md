# CBL-29392 (CLM-7205) Ticket search by contract salesroom code

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Ticketing (TCK)/Requirements/CBL-29392 (CLM-7205) Ticket search by contract salesroom code
- **Diagram ID**: 163040
- **Elements**: 5
- **Connectors**: 1

```mermaid
graph TD
    REQ_Search_ticket_by_related_subject_type_and_ArrangedOnSale["REQ - Search ticket by related subject type and ArrangedOnSalesroom list"]
    GetTicketInfoRequest["GetTicketInfoRequest"]
    MOD_10_012_Search_for_tickets_service["{MOD}10.012 Search for tickets service"]
    ADD_Get_salesroom_from_contract["{ADD}Get salesroom from contract"]
    MOD_10_022_Create_ticket_service["{MOD}10.022 Create ticket service"]
    MOD_10_022_Create_ticket_service -->|unnamed| ADD_Get_salesroom_from_contract
```
