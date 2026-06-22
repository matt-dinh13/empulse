---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Account Transitions/v3.0/CELAccountTransactionsRequest"
domain: "Analysis Model"
element_id: 1879819
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Get salesroom by Contract operation type

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Account Transitions/v3.0/CELAccountTransactionsRequest

## 📝 Notes

Get the salesroom by the operation type that is done on the application/contract.

Input:

	
- contract
	
- operationType - one of values (APPLICATION_CREATED, OFFER_CHOSEN, CONTRACT_CREATED,AF_SUBMITTED, 2BOD_SAVED, OFFER_REFUSED, DOCUMENTAION_GENERATED, CONTRACT_SIGNED)


If the operation=APPLICATION_CREATED, the salesroom is defined by Temporary Application -> Salesroom.
If the operation=OFFER_CHOSEN, the salesroom is defined by Contract -> Business Event.Salesroom where Business Event.Type="CHOOSE_OFFER" or "SUBMIT_OFFER"
If the operation=CONTRACT_CREATED, the salesroom is defined by Contract -> Business Event.Salesroom where Business Event.Type="CREATE_CONTRACT".
If the operation=AF_SUBMITTED, the salesroom is defined by Contract -> Business Event.Salesroom where Business Event.Type="SUBMIT_PRE" or "CREATE_CONTRACT".
If the operation=2BOD_SAVED, the salesroom is defined by Contract -> Business Event.Salesroom where Business Event.Type="SAVE_2BOD".
If the operation=OFFER_REFUSED, the salesroom is defined by Contract -> Business Event.Salesroom where Business Event.Type="REFUSE_OFFER".
If the operation=DOCUMENTAION_GENERATED, the salesroom is defined by Contract -> Business Event.Salesroom where Business Event.Type="GENERATE_DOCUMENTATION".
If the operation=CONTRACT_SIGNED, the salesroom is defined by Contract -> Business Event.Salesroom where Business Event.Type="SIGN"

If more then one record with defined business event type exists for one contract, the last recorded entry is chosen.

## 🔗 Connections (1)

- ← Dependency: [[{ADD}CELAccountTransactionsDto]]

## 📊 Appears In (1 diagrams)

- Logical: CELAccountTransactionsRequest
