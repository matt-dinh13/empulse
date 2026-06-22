---
type: Requirement
stereotype: "Process Rule"
package: "HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs"
domain: "Analysis Model"
element_id: 1855616
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Scanned files processing job

> **Type**: Requirement · **Stereotype**: «Process Rule»
> **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Automatic jobs

## 📝 Notes

Code: PROCESS_SCANNED_FILES
Description: Processing of scanned files upload from SFTP to BSL
Used for UC 01.393 Run Scanned files data processing batch

Number of starts min: 1 per day
Time of start: Outside business hours
Max number of starts: 1
Business impact: MEDIUM

## 🔗 Connections (1)

- → Dependency: [[After business hours]]

## 📊 Appears In (1 diagrams)

- Custom: Automatic jobs
