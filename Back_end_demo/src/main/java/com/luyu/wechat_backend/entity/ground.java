package com.luyu.wechat_backend.entity;

import java.util.Date;

public class ground {
    private String name;
    private Integer num;
    private String todayTime;
    private Date createTime;
    private String orderSlot;
    private String phone;
    private long uuid;

    public long getUuid() {
        return uuid;
    }

    public void setUuid(long uuid) {
        this.uuid = uuid;
    }

    public Integer getNum() {
        return num;
    }

    public void setNum(Integer num) {
        this.num = num;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTodayTime() {
        return todayTime;
    }

    public void setTodayTime(String todayTime) {
        this.todayTime = todayTime;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public String getOrderSlot() {
        return orderSlot;
    }

    public void setOrderSlot(String orderSlot) {
        this.orderSlot = orderSlot;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

}
