package com.luyu.wechat_backend.controller;


import com.luyu.wechat_backend.entity.ground;
import com.luyu.wechat_backend.service.GroundService;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/ground")
public class GroundController {

    @Autowired
    private GroundService groundService;


    @RequestMapping(value = "/listground", method = RequestMethod.GET)
    @ResponseBody
    public List<ground> listGround(@Param("name") String name,
                                   @Param("todayTime") String todayTime) {
        List<ground> list = groundService.getGroundList(name,todayTime);
        return list;
    }

    @RequestMapping(value = "/orderground", method = RequestMethod.POST)
    @ResponseBody
    public String orderGround(@RequestBody ground ground) {
        boolean finish = groundService.addGround(ground);
        if (finish){
            return "订票成功!";
        }else {
            return "订票失败!";
        }
    }

    @RequestMapping(value = "/myorder", method = RequestMethod.GET)
    @ResponseBody
    public List<ground> myorder(String phone) {
        List<ground> list = groundService.getMyOrder(phone);
        return list;
    }
}
