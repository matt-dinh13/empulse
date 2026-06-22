---
type: Class
stereotype: "type"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9181 Replace Document upload job with direct upload via DMS/LOR-9202 Remove AFS functionality"
domain: "Requirements Model"
element_id: 1819826
diagrams: 11
connections: 16
tags:
  - class
  - requirements-model
---

# 🔷 {MOD}Check Moment Type

> **Type**: Class · **Stereotype**: «type»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9181 Replace Document upload job with direct upload via DMS/LOR-9202 Remove AFS functionality

## 📝 Notes

This entity defines some considerable types of system events. These events are used either to some definitions for creating business objects (e.g. a document of respective type, document printout), or to definition following steps that are to be performed when the respective event occurred.

## 🔗 Connections (16)

- ← Dependency: [[Check Moments-Available]]
- ← Dependency: [[When Required]]
- ← Dependency: [[When Printable]]
- ← Association: [[Profile Document Rule Print Moment]]
- ← Association: [[Document Content Check Moment]]
- ← Association: [[Profile Document Rule Check Moment]]
- ← Dependency: [[TempAppl Document]]
- → Realisation: [[REQ#1 System events processing]]
- ← Usage: [[Check Moment For Recalculation Reason]]
- ← Dependency: [[Service Type Parameter Definition]]
- ← Dependency: [[Service Evaluation Event Definition]]
- ← Dependency: [[Service To Document Type]]
- ← Dependency: [[Service To Document Type]]
- ← Association: [[Supplement Type (Enumeration 1879280)]]
- ← Association: [[Supplement Document Print Moment]]
- ← Association: [[Supplement Document Required Moment (Class 1879269)]]

## 📊 Appears In (11 diagrams)

- Custom: LOR-9202 Remove AFS functionality
- Logical: Documentation Configuration
- Logical: Loan Service Structure
- Logical: Printing an Installment schedule
- Logical: Service Processing Setting
- Logical: Supplement Definition
- Logical: Supplement definition domain - Logical data model
- Logical: Supplement definition for Collection tool service
- Logical: Supplement definition for Credit limit change
- Logical: Supplement definition for Loan restructuring
- Logical: Temporary Application - document

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| CTSE |  |  |
| SRC |  |  |
| ABC |  |  |
| AFF |  |  |
| AFF1 |  |  |
| AFF2 |  |  |
| BCF |  |  |
| CA |  |  |
| CDD |  |  |
| CF |  |  |
| CIC |  |  |
| CPO |  |  |
| CR |  |  |
| CS |  |  |
| DDC |  |  |
| DDP |  |  |
| ERR |  |  |
| PER |  |  |
| SRE |  |  |
| EIC |  |  |
| {ADD}SACR |  |  |
