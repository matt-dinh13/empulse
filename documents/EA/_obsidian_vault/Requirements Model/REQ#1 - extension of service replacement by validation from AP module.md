---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9632 (CLM-2981) FLIP eligibility validation in AP"
domain: "Requirements Model"
element_id: 1688630
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 REQ#1 - extension of service replacement by validation from AP module

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-9632 (CLM-2981) FLIP eligibility validation in AP

## 📝 Notes

Extension of the service replacement (flip process implemented by original task CLM-2557) by a new validation which determine if the change is possible in AP module.
For the validation, a new REST API of AP module is used (e.g. POST "/api/services/flip/").

Updates:

	
- new rule {ADD}Validate Service replacement for REL contract  added
	
- {MOD}01.782 Replace Contract Service updated to use a new rule + new access right to overrule check of SERVICE_REPLACE_ALLOWED flag
	
- {MOD}08.085 Replace service manually updated to use a new rule

## 📊 Appears In (1 diagrams)

- Custom: CBL-9632 (CLM-2981) FLIP eligibility validation in AP
