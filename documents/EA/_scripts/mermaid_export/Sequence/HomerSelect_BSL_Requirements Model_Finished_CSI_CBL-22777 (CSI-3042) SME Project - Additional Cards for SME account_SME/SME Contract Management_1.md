# SME Contract Management

```mermaid
sequenceDiagram
    participant unnamed as unnamed
    participant COS as COS
    participant SUPP as SUPP
    participant ZeeBe_Process as ZeeBe Process
    participant RMQ_Exchange as RMQ Exchange
    participant COMA as COMA
    participant customer_chooses_offer as customer chooses offer
    participant ADS as ADS
    participant SQS as SQS
    participant AM as AM
    unnamed->>COS: NoteLink
    SUPP->>COS: AddServiceToContract
    ZeeBe_Process->>SUPP: CreateServiceSupplement
    COS->>RMQ_Exchange: ContractServiceCreated
    SUPP->>COMA: AssignSupplement2Contract
    customer_chooses_offer->>ZeeBe_Process: Sequence
    SUPP->>ADS: GetApplication
    ZeeBe_Process->>COMA: CreateContract
    COMA->>ZeeBe_Process: Sequence
    COS->>COS: CreateContractService
    SUPP->>SQS: GetSalesQuotes
    AM->>RMQ_Exchange: processServiceOperationNotification
    RMQ_Exchange->>AM: Sequence
    AM->>AM: Sequence
    RMQ_Exchange->>COS: Sequence
    COMA->>COMA: Sequence
    SUPP->>SUPP: ValidateRequest
    SUPP->>SUPP: CreateSupplement
    ZeeBe_Process->>ADS: Sequence
    ZeeBe_Process->>ZeeBe_Process: Sequence
    SUPP->>ZeeBe_Process: Sequence
```
