---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Modules/Document management (DMS)/Requirement Model/CBL-30572 (CSI-4306) Receive file expiration from CAB"
domain: "Modules"
element_id: 1880037
diagrams: 3
connections: 0
tags:
  - usecase
  - modules
---

# 🎯 {MOD}Process CAB DocumentNotification

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Modules/Document management (DMS)/Requirement Model/CBL-30572 (CSI-4306) Receive file expiration from CAB

## 📝 Notes

System receives DocumentNotification from CAB system about file archivation or deletion.
System finds document file (DMS File) by file UUID value from notification.
If DMS File is found then system archives the DMS file and send DMS DocumentNotification with DocumentUpdated event.
{ADD CSI-4306}
If notification attribute trigger = expiration then also whole related document is archived if no other file is related to the document:

	
- system finds document related to archived DMS File
	
- system finds all document files related to document, if there is no related document file, then system deletes (archives) whole document and send DocumentNotification with DocumentExpired event (new event used just for this case)

{/ADD}


RabbitMQ is used with routing keys:

	
- rabbitmq.documentNotification.routing-key.archive
	
- rabbitmq.documentNotification.routing-key.delete


	
- rabbitmq.documentNotification.routing-key.force-delete

## 📊 Appears In (3 diagrams)

- Custom: CBL-30572 (CSI-4306) Receive file expiration from CAB
- Logical: DocumentNotification
- Use Case: Document services - Use Case Model
