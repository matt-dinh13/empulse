---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Fill in application - 2SP/Access Rights"
domain: "Analysis Model"
element_id: 1351510
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Process contracts in 2BoD queue

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Fill in application - 2SP/Access Rights

## 📝 Notes

Entry condition A: User has access right 01.083 Fill in application - 2 BoD (contract in FO queue)
Entry condition B: User has access right 01.083 Fill in application - 2 BoD (contract in BO queue)
Entry condition C: Contract->Application_Filling_Queue exists

If A = True AND C =True and Application_Filling_Queue.Filling_Group=FO (B is True or False)then
The user can process contract in FO queue. System can fill 2nd BoD (starts the UC 01.083) and display buttons: Switch queue, Cancel, Reschedule

If B = True AND C =True and Application_Filling_Queue.Filling_Group=BO (A is True or False) then
The user can process contract in BO queue. System can fill 2nd BoD (starts the UC 01.083) and display buttons: Switch queue, Cancel, Reschedule

Otherwise
The user can not process contracts in BO or FO queue.The user doesn't see these buttons.

## 🔗 Connections (1)

- ← Dependency: [[01.083 Fill in application - 2BoD (UseCase 1811345)]]

## 📊 Appears In (1 diagrams)

- Custom: Access Rights
