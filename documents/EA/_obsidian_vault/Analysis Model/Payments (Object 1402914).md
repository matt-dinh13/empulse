---
type: Object
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process outgoing payments/User Interface Model"
domain: "Analysis Model"
element_id: 1402914
diagrams: 1
connections: 0
tags:
  - object
  - analysis-model
---

# 🔸 Payments

> **Type**: Object · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process outgoing payments/User Interface Model

## 📝 Notes

Grid with outgoing payments going to be generated to file.

Default ordering: creation time desc, recipient asc, amount desc, status asc, id of payment asc

Grid rows limit is defined by global parameter OutgoingPaymentsGridLimit. 
If the grid should contain more items than is allowed by the limit then:

	
- the text PAY_TooManyPayments is displayed under the grid
	
- list of found outgoing payments is empty

## 📊 Appears In (1 diagrams)

- Custom: Generate outgoing payment orders screen

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Creation time | datetime |  |
| Amount | financial amount |  |
| Contract number | contract code |  |
| Recipient | text |  |
| Payment type | outgoing payment type |  |
| Status | outgoing payment status |  |
| Is blocked | boolean |  |
