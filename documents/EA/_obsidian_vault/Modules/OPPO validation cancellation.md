---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Commodity/Interface Consumed/External manufacturers/Business Rules"
domain: "Modules"
element_id: 1881767
diagrams: 2
connections: 1
tags:
  - requirement
  - modules
---

# 📋 OPPO validation cancellation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Commodity/Interface Consumed/External manufacturers/Business Rules

## 📝 Notes

System calls local app to get data for OPPO request:
https://dms.prod.homecredit.in/dmsServer/external_codes/OPPO/pos/{salesroom}/OPPO_IMEI with parameters
salesroom = salesroom code
From response in format dealer@agent system gets dealer and agent.

System calls external system for validation cancelation with data from commodity.
Endpoint: /DRP_OPEN_API/drp/installment/noLogin/GWService/imeiInstallmentCancel
Parameters:
installmentBy = HomeCredit
imei = value (commodity.IMEI or commodity.SerialNumber from External validation cancellation )
model = commodity.modelCode or commodity.modelNumber if modelCode is not filled
dealer = dealer
agent = agent

note: documentation for oppo integration assigned in CBL-18864

## 🔗 Connections (1)

- ← Dependency: [[{MOD}External validation cancellation]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Custom: PCG-5308 - Vivo - IMEI unblocking API (CBL-28657)
