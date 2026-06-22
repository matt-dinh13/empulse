---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/ServiceProcessing/TBD_ProvidedInterface/Process service"
domain: "Modules"
element_id: 1081455
diagrams: 1
connections: 1
tags:
  - class
  - modules
---

# 🔷 Overdue Item

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/ServiceProcessing/TBD_ProvidedInterface/Process service

## 📝 Notes

It is structure of one unpaid Installment Part Type which is calculated either from:

	
- the overdue Installment Parts of the original active STANDARD Installments having Due Date < ER Due Date and (Amount - Amount Paid > 0)
	
- or Installment Parts of the original active EXTRAORDINARY Installments having (Amount - Amount Paid > 0)

## 🔗 Connections (1)

- → Aggregation: [[Overdue Items]]

## 📊 Appears In (1 diagrams)

- Logical: Process service

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Amount | Financial amount |  |
| Part Type | Installment Part Type |  |
| Tariff Item | Tariff Item Type |  |
| Due Date | DateTime |  |
| Installment | int |  |
