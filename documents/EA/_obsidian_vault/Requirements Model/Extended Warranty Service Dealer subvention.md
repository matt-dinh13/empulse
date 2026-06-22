---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-992 (CBL-2923) Extended Warranty Service Dealer subvention"
domain: "Requirements Model"
element_id: 1299210
diagrams: 1
connections: 7
tags:
  - requirement
  - requirements-model
---

# 📋 Extended Warranty Service Dealer subvention

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-992 (CBL-2923) Extended Warranty Service Dealer subvention

## 📝 Notes

In order to support service subventions (subventions from HC to partner), we need to:

	
- Extend entity Financial Parameters Item 2 Subvention by Contract Service Id (foreign key).
	
- Create a link between a financial parameters item and a contract service (Financial Parameters Item 2 Subvention.Contract Service Id) based on a link between an offer financial parameters item and an offer service (Offer Financial Parameters Item 2 Subvention.Offer Service Id) during a contract signature.
	
- Include service subventions into calculation of subvention amount and partner's payment amount (its value is negative).
	
- Create a new outgoing payment type SRS (Service related subvention)
	
- Create outgoing payment of type SRS if service related subvention amount < 0.

## 🔗 Connections (1)

- → Generalization: [[PAYM-992 Extended Warranty Service Dealer subvention]]

## 📊 Appears In (1 diagrams)

- Custom: PAYM-992 (CBL-2923) Extended Warranty Service Dealer subvention
