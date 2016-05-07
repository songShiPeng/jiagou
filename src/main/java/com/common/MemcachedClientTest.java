package com.common;

import java.net.InetSocketAddress;

import net.spy.memcached.MemcachedClient;


/**
 * 
 * @author 14642
 *
 */
public class MemcachedClientTest {
	
	public static void main(String [] args){
		new MemcachedClientTest().connetTest();
	}
	public void connetTest(){
		 try{
	         // 本地连接 Memcached 服务
	         MemcachedClient mcc = new MemcachedClient(new InetSocketAddress("127.0.0.1", 11211));
	         System.out.println("Connection to server sucessful.");
	         
	         // 关闭连接
	         mcc.shutdown();
	         
	      }catch(Exception ex){
	         System.out.println( ex.getMessage() );
	      }
	}
}
