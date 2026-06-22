---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Person/Business Rules"
domain: "Analysis Model"
element_id: 1036869
diagrams: 3
connections: 11
tags:
  - requirement
  - analysis-model
---

# 📋 Concatenate person name rules

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Person/Business Rules

## 📝 Notes

These rules describe order concatenation of person names for presentation purposes on the application screens. These rules are used for name concatenation of any person which originates in the system (client, contact person)
The rules are country specific so country specific implementations looks as follow:

	
- Indonesia - Concatenate person name - ID rule
	
- India - Concatenate person name IN rule
	
- Vietnam - Concatenate person name - VN rule
	
- Kazakhstan - Concatenate person name - KZ rule


	
- Philippines - Concatenate person name - PH rule


If no country specific rule is present, default rule Concatenate person name - default rule is applied.

## 🔗 Connections (11)

- ← Generalization: [[Concatenate person name - default rule]]
- ← Generalization: [[Concatenate person name - PH rule]]
- ← Generalization: [[Concatenate person name - VN rule]]
- ← Generalization: [[Concatenate person name KZ rule]]
- ← Generalization: [[Concatenate person name - ID rule]]
- ← Generalization: [[Concatenate person name - IN rule]]
- ← Dependency: [[{MOD}Parent full name]]
- ← Dependency: [[Application Processing]]
- ← Dependency: [[Create application payment channel]]
- ← Dependency: [[Update application payment channel]]
- ← InformationFlow: [[07.030 Show detail of communication (UseCase 1879992)]]

## 📊 Appears In (3 diagrams)

- Custom: Business Rules
- Custom: CBL-2936 (CLM-1296) Communication detail - load Client data from CIF
- Use Case: Fill in application
