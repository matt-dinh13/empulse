---
type: Requirement
stereotype: "Business Rule"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme"
domain: "Modules"
element_id: 1878866
diagrams: 2
connections: 3
tags:
  - requirement
  - modules
---

# 📋 Net Cash Payment amount definition

> **Type**: Requirement · **Stereotype**: «Business Rule»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules/Traditional Product without Financing Scheme

## 📝 Notes

Net cash payment (NCP, also known as Down Payment) defines the cash amount paid by client at contract origination which covers part of goods price.
It is calculated only for products with InitialTransactionType = POS or (ProductType = SAI and and Product.ProductFlag.SAI_WITH_INSTALLMENT_SCHEDULE = true (for other products the NCP = 0).

NCP = CashPayment - Sum(Fees which should be paid in advance) - Sum(ServiceFees paid in advance)

See Origination fees amount definition and Service fees amount definition.

Fees paid in advance are  fees where TariffItemType.Charging Periodicity = 'ONE_TIME' and rule Is Flag on Tariff Item Type (TariffItemType from input, TO_PRINCIPAL) returns False.

The value of NCP is rounded up using ROUND_ANNUITY global parameter.

## 🔗 Connections (3)

- ← Dependency: [[{MOD}Calculation of Financial Parameters of offer]]
- → Dependency: [[Origination fees amount definition]]
- → Dependency: [[Service fees amount definition]]

## 📊 Appears In (2 diagrams)

- Custom: Calculation of financial parameters of offer
- Custom: Financial calculations
