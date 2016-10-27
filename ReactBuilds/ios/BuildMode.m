//
//  getBuildMode.m
//  ReactBuilds
//
//  Created by Belde, Vikram on 10/27/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "BuildMode.h"

@implementation BuildMode

RCT_EXPORT_MODULE()

- (NSDictionary *)constantsToExport {
  
     #ifdef PRODUCTION
        return @{
                 @"Mode": @"PRODUCTION",
                 @"EndPoint": @"https://ProductionEndPoint.com"
                 
                 };
    #elif RELEASE
        return @{
                 @"Mode": @"RELEASE",
                 @"EndPoint": @"https://ReleaseEndPoint.com"
                 };
    #elif DEBUG
        return @{
                 @"Mode": @"DEBUG",
                 @"EndPoint": @"https://DebugEndPoint.com"
                 };
    #elif STAGING
       return @{
                @"Mode": @"STAGING",
                @"EndPoint": @"https://StagingEndPoint.com"
                };
    #endif
  
  //return @"adad";
}

@end
