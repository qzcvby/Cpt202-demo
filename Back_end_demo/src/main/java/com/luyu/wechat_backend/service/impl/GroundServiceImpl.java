package com.luyu.wechat_backend.service.impl;

import com.luyu.wechat_backend.dao.GroundDao;
import com.luyu.wechat_backend.entity.ground;
import com.luyu.wechat_backend.service.GroundService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.luyu.wechat_backend.service.impl.Snowflake;

import java.util.Date;
import java.util.List;


@Service
public class GroundServiceImpl implements GroundService {

    @Autowired
    private GroundDao groundDao;

    @Override
    public List<ground> getGroundList(String name, String todayTime) {
        return groundDao.showGround(name,todayTime);
    }

    @Transactional
    @Override
    public boolean addGround(ground ground) {
        ground.setCreateTime(new Date());
        ground.setUuid(Snowflake.roll_ID());
        boolean finish = groundDao.insertGround(ground);
        return finish;
    }

    @Override
    public List<ground> getMyOrder(String phone) {
        return groundDao.queryOrder(phone);
    }
}
