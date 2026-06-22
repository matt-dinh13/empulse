---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/ServiceProcessing/TBD_ProvidedInterface/Process service"
domain: "Modules"
element_id: 1081456
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 Overdue Items

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/ServiceProcessing/TBD_ProvidedInterface/Process service

## 📝 Notes

The structure keeps array of:

	
- Installment Parts of the standard Installment of the original Installment schedule with due date < ER Due Date
	
- an extraordinary Installments with Installment Part.Part Type = Penalty or Fee.

If no such item exists for mentioned due date, the structure is empty.

## 🔗 Connections (3)

- → Aggregation: [[Calculation Result]]
- → Aggregation: [[CalculationInfo]]
- ← Aggregation: [[Overdue Item]]

## 📊 Appears In (1 diagrams)

- Logical: Process service

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Sum of Fees | Financial Amount |  |
| Sum of Penalties | Financial Amount |  |
