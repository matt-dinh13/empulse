---
type: Requirement
stereotype: "Process Rule"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs"
domain: "Analysis Model"
element_id: 1855597
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Anonymize archived temporary application

> **Type**: Requirement · **Stereotype**: «Process Rule»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs

## 📝 Notes

Code: TEMP_APP_ANONYMIZE
Description: Automatically anonymizes archived Temporary Applications when they are older than number of days set in GL MaxAgeOfTemporaryApplication.
Used for: UC01_682

Number of starts min: 1 per day
Time of start: After business hours (9pm)
Max number of starts: not limited
Business impact: LOW

## 🔗 Connections (1)

- → Dependency: [[Once a day (Activity 1855638)]]

## 📊 Appears In (1 diagrams)

- Custom: Automatic jobs
