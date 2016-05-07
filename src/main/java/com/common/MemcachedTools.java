package com.common;

import java.net.InetSocketAddress;

import memcached.MemcachedClient;
import memcached.SockIOPool;



/**
 * memcached操作工具类
 * @author 宋世鹏
 *
 */
public class MemcachedTools {
	
	
	public  MemcachedTools(){
		 try{
	         // 连接 Memcached 服务
			 String[] servers={"192.168.71.132:11111"};
			 SockIOPool pool=SockIOPool.getInstance();
			 pool.setServers(servers);
			 pool.setFailover(true);
			 pool.setInitConn(10);
			 pool.setMinConn(5);
			 pool.setMaxConn(25);
			 pool.setMaintSleep(30);
			 pool.setNagle(true);
			 pool.setAliveCheck(true);
			 pool.setHashingAlg(SockIOPool.CONSISTENT_HASH);
			 pool.initialize();
			 System.out.println("初始化成功！");
	         
	      }catch(Exception ex){
	         System.out.println( ex.getMessage() );
	      }
	}
}
