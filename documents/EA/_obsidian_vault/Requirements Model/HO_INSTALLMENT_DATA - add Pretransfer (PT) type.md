---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1884 (CBL-4285) - Pairing time for payment made before due date - Interface update"
domain: "Requirements Model"
element_id: 1350883
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 HO_INSTALLMENT_DATA - add Pretransfer (PT) type

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1884 (CBL-4285) - Pairing time for payment made before due date - Interface update

## 📝 Notes

HO_INSTALLMENT_DATA - XSD InstallmentType.InstallmentType

	
- installmentType [string] - new type "Pre-transfer" (PT) will be sent
	
- If installment contains only one Installment Part Type that is not Principal (S, ST) or Interest (I, IT) then this installment part type is displayed (INSTALLMENT_PART.PART_TYPE. NAME) Else text “Installment” is displayed.

## 🔗 Connections (1)

- ← Association: [[REQ2_ update data sources]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-1884 (CBL-4285) - Pairing time for payment made before due date - Interface update
