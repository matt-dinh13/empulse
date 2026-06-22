---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1884 (CBL-4285) - Pairing time for payment made before due date - Interface update"
domain: "Requirements Model"
element_id: 1634485
diagrams: 2
connections: 2
tags:
  - class
  - requirements-model
---

# 🔷 InstallmentType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1884 (CBL-4285) - Pairing time for payment made before due date - Interface update

## 📝 Notes

List of installments, presenting the currently selected version of the installment schedule, selected by following rules:

	
- all installments of Installment Version <= selected version
	
- and all installments which are not Deactivated In Version = selected version or Deactivated In Version is NULL

LDM:
INSTALLMENT having c.CONTRACT_CODE = Contract AND i.INSTALLMENT_VERSION <=selected version AND (i.DEACTIVATED_IN_VERSION <> selected version OR i.DEACTIVATED_IN_VERSION IS NULL)

## 🔗 Connections (2)

- → Dependency: [[MoneyType (Class 1878205)]]
- ← Dependency «use»: [[ContractInstallmentType]]

## 📊 Appears In (2 diagrams)

- Custom: PAYM-1884 (CBL-4285) - Pairing time for payment made before due date - Interface update
- Logical: HO_INSTALLMENT_DATA

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| installmentAmount | MoneyType |  |
| partPrinciple | MoneyType |  |
| installmentNumber | int |  |
| installmentType | string |  |
| outstandingPrincipal | MoneyType |  |
| paymentDate | dateTime |  |
| tariffItemTypeCode | string |  |
| penaltyPartAmount | MoneyType |  |
