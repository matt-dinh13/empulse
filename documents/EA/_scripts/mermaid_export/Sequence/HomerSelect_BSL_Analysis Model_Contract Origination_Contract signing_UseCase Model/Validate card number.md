# Validate card number

- **Diagram Type**: Sequence
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/UseCase Model
- **Diagram ID**: 164388
- **Elements**: 5
- **Connectors**: 10

```mermaid
sequenceDiagram
    participant Card_reservation as Card reservation
    participant CABUS as CABUS
    participant Sign_contract_screen as Sign contract screen
    participant User as User
    Card_reservation->>+CABUS: ReserveCardRequest
    Sign_contract_screen->>+Card_reservation: validateCardNo
    Card_reservation->>+Card_reservation: saveCardNo
    Card_reservation->>+CABUS: GetCardRequest
    Card_reservation->>+Card_reservation: processResult
    CABUS->>+Card_reservation: GetCardResponse
    CABUS->>+Card_reservation: ReserveCardResponse
    Card_reservation->>+Sign_contract_screen: displayResultMsg
    CABUS->>+CABUS: reserveCard
    User->>+Sign_contract_screen: clicks Validate button
```
