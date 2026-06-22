# Party-notification

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/JMS messages/Consumed JMS messages/Party notifications
- **Diagram ID**: 82141
- **Elements**: 16
- **Connectors**: 15

```mermaid
classDiagram
    class queryProjection["queryProjection"]
    class partyRoleType["partyRoleType"]
    class businessProcess["businessProcess"]
    class manualIdentificationResultCode["manualIdentificationResultCode"]
    class manualIdentificationStatus["manualIdentificationStatus"]
    class operation["operation"]
    class processedBy["processedBy"]
    class identificationResult["identificationResult"]
    class modifiedObjectNotification["modifiedObjectNotification"]
    class modifiedObjects["modifiedObjects"]
    class projectionNotification["projectionNotification"]
    class antecedentSuccedentPartyRole["antecedentSuccedentPartyRole"]
    class projections["projections"]
    class partyRoleNotification["partyRoleNotification"]
    class roles["roles"]
    class notification["notification"]
    notification ..> roles : unnamed
    notification ..> businessProcess : unnamed
    notification ..> identificationResult : unnamed
    roles ..> partyRoleNotification : unnamed
    partyRoleNotification ..> antecedentSuccedentPartyRole : unnamed
    partyRoleNotification ..> partyRoleType : unnamed
    partyRoleNotification ..> projections : unnamed
    projections ..> projectionNotification : unnamed
    antecedentSuccedentPartyRole ..> processedBy : unnamed
    projectionNotification ..> modifiedObjects : unnamed
    projectionNotification ..> queryProjection : unnamed
    modifiedObjects ..> modifiedObjectNotification : unnamed
    modifiedObjectNotification ..> operation : unnamed
    identificationResult ..> manualIdentificationStatus : unnamed
    identificationResult ..> manualIdentificationResultCode : unnamed
```
