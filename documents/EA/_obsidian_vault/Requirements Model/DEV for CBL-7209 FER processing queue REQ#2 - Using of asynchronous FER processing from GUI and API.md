---
type: Requirement
stereotype: "Story"
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7209 (CLM-2456) FER processing queue"
domain: "Requirements Model"
element_id: 1484856
diagrams: 1
connections: 1
tags:
  - requirement
  - requirements-model
---

# 📋 DEV for CBL-7209 FER processing queue REQ#2 - Using of asynchronous FER processing from GUI and API

> **Type**: Requirement · **Stereotype**: «Story»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7209 (CLM-2456) FER processing queue

## 📝 Notes

To fulfill this technical requirement we will use already existing system event ProcessFERAutomaticallySE and use case 08.041 Process FER automatically implemented by ISPAY team in CBL-4071. During creating of a FER request in GUI or via API we will create an instance of ProcessFERAutomaticallySE which will then be automatically processed by the aforementioned use case.

1. We need to stop calling FER processing (UC 03.100) directly during manual FER request creation in GUI (UC 03.050) and generate ProcessFERAutomaticallySE instead.

2. We need to start generating ProcessFERAutomaticallySE also when FER request is created via API (UC 01.786) as the processing is not triggered from there at the moment.

3. We will implement a new data structure for managament of CLM feature flags - CLM Feature Flag. It will keep feature flags and their boolean values (turned on/turned off).

4. We will implement the first feature flag clmAsyncFerProcessingAfterRequest in this task and turn it on on PH before rolling out to all countries.

## 🔗 Connections (1)

- → Generalization: [[CLM-2456 CBL-7209 FER processing queue]]

## 📊 Appears In (1 diagrams)

- Custom: CBL-7209 (CLM-2456) FER processing queue
