---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PIF REST API/v1/applicant"
domain: "Analysis Model"
element_id: 1570688
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 ApplicantPersonRelationship

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/PIF REST API/v1/applicant

## 🔗 Connections (2)

- ← Usage: [[Applicant]]
- → Usage: [[Audit]]

## 📊 Appears In (1 diagrams)

- Logical: Applicant

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| version | int |  |
| activeYn | boolean |  |
| originationDate | string <date-time> |  |
| audit | Audit |  |
| reasonOfChange | string |  |
| id | int |  |
| customValues | customEntryWrapper |  |
| numberOfDependents | int |  |
| maritalStatus | stringCodeOrValue |  |
| education | stringCodeOrValue |  |
| housingType | stringCodeOrValue |  |
| relatedPersonInfos | RelatedPersonInfo |  |
| employmentInfos | EmploymentInfo |  |
| politicallyExposedPerson | boolean |  |
| statementChannel | string |  |
| income | int |  |
| incomeOther | int |  |
| amountOfOtherDebts | int |  |
| householdIncome | int |  |
| securityAnswer | string |  |
| securityQuestion | string |  |
| preferredLanguage | string |  |
