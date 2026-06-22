---
type: DataType
stereotype: ""
package: "HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Outgoing Payments/Communication Model"
domain: "Modules"
element_id: 1415445
diagrams: 2
connections: 1
tags:
  - datatype
  - modules
---

# 📐 ORDERPAY140 Beneficiary Type

> **Type**: DataType
> **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Outgoing Payments/Communication Model

## 📝 Notes

Type of beneficiary.
"c" for payments sent to client

	
- cash loans (through Kazpost or directly to client's account)
	
- initial revolving cash transaction

"p" for payments sent to partner (salesroom)

	
- consumer loans
	
- initial revolving consumer transaction
	
- insurance

## 🔗 Connections (1)

- ← Dependency «use»: [[ORDERPAY140]]

## 📊 Appears In (2 diagrams)

- Logical: Outgoing payments - Communication Model
- Logical: Outgoing payments - Communication tables

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| c - client |  |  |
| p - partner |  |  |
