const BaseURL = "http://192.168.196.83";
// const AbnormalApi = "http://210.94.194.83:50000";
// const QnaApi = "http://210.94.194.83:50001";
// const DeepscanApi = "http://210.94.194.83:50002";
// const SelfharmApi = "http://210.94.194.83:50003";
// const FalldownApi = "http://210.94.194.83:50004";
const AbnormalApi = BaseURL + ":50000";
const QnaApi = BaseURL + ":50001";
const DeepscanApi = BaseURL + ":50002";
const SelfharmApi = BaseURL + ":50003";
const FalldownApi = BaseURL + ":50004";
const Available = [AbnormalApi, FalldownApi];
const OnStudy = [QnaApi, DeepscanApi, SelfharmApi];

export {
    Available,
    OnStudy,
    AbnormalApi,
    QnaApi,
    DeepscanApi,
    SelfharmApi,
    FalldownApi,
};
