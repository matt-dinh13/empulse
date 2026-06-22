---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1787 (CBL-4815) EMI schedule for JL contracts"
domain: "Requirements Model"
element_id: 1379087
diagrams: 1
connections: 2
tags:
  - requirement
  - requirements-model
---

# 📋 CONF EMI schedule for JL contracts

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1787 (CBL-4815) EMI schedule for JL contracts

## 📝 Notes

Create new Installment Plan Scheme in DB for India:
* Active = True
* Annuity Rounding Method = UP
* Annuity Rounding Scale = 0.01
* Code = 'IN_JL_KVG_IP_SCHEME'
* Day Count Method = 30/360
* Description = 'Temporary storage of IS algorithm settings for JL contracts co-financed by KVG'
* Generation Method = EQUAL_ANNUITY
* Interest Rounding Method = UP
* Interest Rounding Scale = 1
* Is Default = 1
* Is Inint AIR = 0
* Name = 'IN_JL_KVG_IP_SCHEME'

Create a new global parameter InstallmentPlanSchemeForJFS of type string and set its value to 'IN_JL_KVG_IP_SCHEME' in India and to null on all other countries.

## 🔗 Connections (1)

- → Generalization: [[PAYM-1787 (CBL-4815) EMI schedule for JL contracts (Requirement 1379085)]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-1787 (CBL-4815) EMI schedule for JL contracts
