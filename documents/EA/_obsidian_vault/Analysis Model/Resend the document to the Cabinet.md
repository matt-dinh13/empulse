---
type: Requirement
stereotype: "Process Rule"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs"
domain: "Analysis Model"
element_id: 1855623
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Resend the document to the Cabinet

> **Type**: Requirement · **Stereotype**: «Process Rule»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs

## 📝 Notes

Code: DMS_FILE_RESEND_JOB
Description: Resend the document that stuck in the queue and has not been uploaded into the Cabinet yet. 
Used for: UC01_009_resend_job

Number of starts min: 1 per day
Time of start: every first minute of hour (e.g. 00:01, 01:01...)
Max number of starts: 24
Business impact: HIGH

## 🔗 Connections (1)

- → Dependency: [[Every hour]]

## 📊 Appears In (1 diagrams)

- Custom: Automatic jobs
