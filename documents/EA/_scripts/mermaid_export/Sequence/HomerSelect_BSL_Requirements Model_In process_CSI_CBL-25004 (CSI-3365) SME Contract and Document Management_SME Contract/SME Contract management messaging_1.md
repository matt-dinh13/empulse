# SME Contract management messaging

```mermaid
sequenceDiagram
    participant SUPP as SUPP
    participant RMQ_sup_contract_supplement as RMQ
sup.contract-supplement
    participant RMQ_am_account_processresult as RMQ
am.account.processresult
    participant COS as COS
    participant COMA as COMA
    participant RMQ_coma_contract as RMQ
coma.contract
    participant RMQ_cos_contract_services as RMQ
cos.contract-services
    participant AM as AM
    SUPP->>RMQ_sup_contract_supplement: Sequence
    RMQ_am_account_processresult->>COS: Sequence
    SUPP->>RMQ_sup_contract_supplement: Sequence
    COS->>COS: ActivateContractService
    COS->>COS: CreateContractService
    SUPP->>SUPP: GenerateDocuments
    SUPP->>SUPP: ContratSupplementAcceptation
    COMA->>COMA: CreateContract
    COMA->>RMQ_coma_contract: Sequence
    COS->>RMQ_cos_contract_services: Sequence
    SUPP->>RMQ_sup_contract_supplement: Sequence
    SUPP->>SUPP: AcceptContractSupplement
    COMA->>RMQ_coma_contract: Sequence
    RMQ_cos_contract_services->>AM: Sequence
    SUPP->>SUPP: CreateContractSupplement
    AM->>RMQ_am_account_processresult: Sequence
    COS->>RMQ_cos_contract_services: Sequence
    COMA->>COMA: ContractActivation
```
