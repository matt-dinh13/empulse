---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9181 Replace Document upload job with direct upload via DMS/LOR-8855 Application form - delete document"
domain: "Requirements Model"
element_id: 1762456
diagrams: 2
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 LOR-8855 Application form - delete document

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/LOR/LOR-9181 Replace Document upload job with direct upload via DMS/LOR-8855 Application form - delete document

## 📝 Notes

As a system, when removing document (that was created via DMS) call DMS endpoint for removal.

Proposed solution
When user clicks Remove document, system calls DMS /rest/v2/documents/{documentUuid}

## 🔗 Connections (1)

- → Realisation: [[LOR-9181 Replace Document upload job with direct upload via DMS]]

## 📊 Appears In (2 diagrams)

- Custom: LOR-8855 Application form - delete document
- Custom: LOR-9181 Replace Document upload job with direct upload via DMS
