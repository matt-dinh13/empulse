---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Service Eligibility Management/Business Rules"
domain: "Modules"
element_id: 1013413
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Get list of Eligibility Criteria Parameters for Service

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/Service Eligibility Management/Business Rules

## 📝 Notes

// Finds list of eligibility criteria and its parameters for particular service

Input:
Service
- code (mandatory)
- version (optional)

Output:
List of service eligibility criteria parameters in structure:
- Criteria Code
- Flag Can Be Overruled
- Criteria Parameter - collection of (Criteria Parameter Code, Criteria Parameter Value)

Find Service by code and version. If version is not specified, find version in status = A (Active).

Search for Eligibility Criteria Parameters as follows:
- For each Eligibility Container assigned to the Service (Service To Eligibility Container) find list of assigned EligibilityCriteria
- For each Eligibility Criteria find list of assigned EligibilityCriteriaParameters
- Add record into output structure and fill it by
--- EligibilityCriteria.Code
--- EligibilityCriteria.CanBeOverruled
--- list of EligibilityCriteriaParameter.(Code, Value)

## 🔗 Connections (1)

- ← Dependency: [[Check contracts for collection tool services eligibility]]

## 📊 Appears In (2 diagrams)

- Custom: Service Eligibility - business rules
- Use Case: Collection tools request
