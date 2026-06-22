---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/ContractFullInfo v8 - PH only"
domain: "Analysis Model"
element_id: 1881184
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 ContractEvent

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Event/ContractFullInfo v8 - PH only

## 📝 Notes

Contract business event (lifecycle) log
Notice, there can be also events related to the loan application

Data Source:
eventType: A_CREATED - Application created
LDM: Contract.Business Event where Business Event Type = CREATE_APPLICATION

eventType: A_APPROVED - Application approved
LDM: Contract ->Contract Status Transition.Creation Date where Status = 'S' (the first transition is taken)

eventType: C_SIGNED - Contract signed
LDM: Contract ->Contract Status Transition.Creation Date where Status = 'N' (the first transition is taken)

eventType: C_REGISTERED - Contract registered
LDM: Contract.Business Event where Business Event Type = CONTRACT_REGISTRATION

eventType: C_ACTIVATED - Contract activated
LDM: Contract ->Contract Status Transition.Creation Date where Status = 'A' (the first transition is taken)

eventType: L_DISBURSEMENT - Loan disbursement (to client or a partner)
LDM:
For Initial Transaction = 'POS' -> Contract.Business Event where Business Event Type = CONSUMER_LOAN_DISBURSED
For Initial Transaction = 'CASH' -> Contract.Business Event where Business Event Type = CONDITIONS_ACCEPTED

eventType: C_PAIDOFF - Contract paid-off
LDM: Contract ->Contract Status Transition.Creation Date where Status = 'L' (the last transition is taken)

eventType: C_WRITTENOFF - Debt on contract is written-off
LDM: Contract ->Contract Status Transition.Creation Date where Status = 'H' (the last transition is taken)

eventType: C_SOLD - Contract is sold an external subject
LDM: Contract ->Contract Status Transition.Creation Date where Status = 'Q' (the last transition is taken)

eventType: C_FINISHED - Contract is finished
LDM: Contract ->Contract Status Transition.Creation Date where Status = 'K' (the last transition is taken)

eventType: C_SECURITIZED - Contract goes through securitization process:
LDM: SecuritizationTranche.SalesDate having ContractSecuritization.Status = DONE and reference to Contract

{ADD CLM-2731}
eventType: C_CANCELLED - Contract is cancelled:
LDM: Contract ->Contract Status Transition.Creation Date where Status = 'T' (the last transition is taken)
{/ADD}

## 🔗 Connections (2)

- ← Dependency: [[ContractBase (Class 1881181)]]
- → Dependency: [[ContractEventType (Enumeration 1881174)]]

## 📊 Appears In (1 diagrams)

- Logical: ContractFullInfo notification v8 (PH only)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| eventType | string |  |
| eventDate | dateTime |  |
