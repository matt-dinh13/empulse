---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3736 (CLM-1489) Additional Protection Validity Period"
domain: "Requirements Model"
element_id: 1303953
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ #1 - Insurance Period length based on Term

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3736 (CLM-1489) Additional Protection Validity Period

## 📝 Notes

Goal of this requirement is adding possibility to have insurance period length defined as term (number of installments) without any limitation related to term of loan contact.
Example: If Insurance Service - First Period duration will be set to 12 month (or term) then insurance period will be always 12 month even if the loan is shorter (e.g. 6 month) or longer (24 month).

Possible test scenario:
Suppose, Insurance Service has following setting: First Insurance Period Trigger = CONTRACT_SIGNING_ DATE_AND_OFFSET ; First Insurance Period Duration = TERM_COUNT (new parameter); Term Count Limit = 8 ( 8 terms); Offset = 0

	
- Determine insurance period start date = Date of contract signature + defined offset (calendar days); e.g. 10.2.2018
	
- Determine insurance period end date = 10.2.2018 + 8 terms/month = 10.10.2019 – 1day = 9.10.2019 --- it will be calculated as plain number of months (set as parameter in Insurance Service Term Count Limit)

In this case, possible shift of the first installment due date is not taken into account. E.g. if contract signature date is 10.2.2018 but the first installment due date will be 5.3.2018 (next is 5.4.2018 and so on) then insurance period end date will be 9.10.2019

## 📊 Appears In (1 diagrams)

- Custom: CBL-3736 (CLM-1489) Additional Protection Validity Period
