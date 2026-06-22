---
type: Package
stereotype: "feature"
package: "HomerSelect/BSL/Feature Guide/LOR"
domain: "Feature Guide"
element_id: 1433081
diagrams: 1
connections: 0
tags:
  - package
  - feature-guide
---

# 📁 Initial client search

> **Type**: Package · **Stereotype**: «feature»
> **Package**: HomerSelect/BSL/Feature Guide/LOR

## 📝 Notes

Initial client search based on the country specific set of search criteria (e.g. national identification number, full name, date of birth) or fingerprint enables the user to quickly search the applicant among existing clients.

## Input
- search data

## Output
- applicant data from CIF displayed if exactly one client was found among existing clients. In case none or more clients are found, the user can perform search again or continue with filling of empty application form.

## Detail
This search step is displayed before filling application form (configurable on a country level). It can be skipped and continue with filling empty application form.

If the user confirms that the data corresponds with the applicant system can display:

- remotely originated applications
- x-sell offer limits
- realize loan using existing revolving contract

User can continue with any option if such exists in the system for the client or fill in standard application form.

## 📊 Appears In (1 diagrams)

- Package: LOR
