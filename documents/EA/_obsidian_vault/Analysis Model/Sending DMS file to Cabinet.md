---
type: Requirement
stereotype: "Process Rule"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs"
domain: "Analysis Model"
element_id: 1855605
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Sending DMS file to Cabinet

> **Type**: Requirement · **Stereotype**: «Process Rule»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs

## 📝 Notes

Automatic job code: SEND_DMS_FILE_JOB
Description: Upload document to document archive by job. For non-critical documents only!
Used for: UC 01.009

Number of starts min: every 2 minutes
Time of start: -
Max number of starts: not limited
Business impact: HIGH

## 🔗 Connections (1)

- → Dependency: [[Every 2 minutes]]

## 📊 Appears In (1 diagrams)

- Custom: Automatic jobs
