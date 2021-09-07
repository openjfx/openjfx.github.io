---
title: "JavaFX 17 Highlights"
section: "highlights"
styleclass: "content"
---
# JavaFX 17 Highlights

JavaFX version 17 has been released and embarks a new LTS release after 11.
We've tailored down some of the most exciting parts of the release in this document.

Exciting features:
- Stylesheets and Images support data-URIs
- "Print to File" support added to JavaFX
- Spotlight, a PointLight that can radiate light in a cone in a specific direction, has been added to JavaFX 3D

Improvements:
- New API to query states of CAPS LOCK and NUM LOCK keys
- Developers can now make use of new SkinBase API to (un)register invalidation/listChange listeners
- Hardware cursor can be used on Monocle-EGL platforms

Removal and Clean up:
- Marlin rasterizer (single-precision) has been removed

The community came together to fix 87 bugs in the last 6 months.
Following are major bug-fixes that went into 17:
- Better touch support in JavaFX:
  - Touch inputs fixes for touch enabled devices running Windows and Linux
  - Scroll events fixed from touch input in window mode
Better support for HiDPI displays with the following fixes:
  - Origin coordinates were fixed for EGL and HiDPI
  - HiDPI scaling fixed for linux platforms
- MediaPlayer's seek used to freeze video. This issue was fixed.
- Memory leaks were fixed in Scene, ControlAcceleratorSupport and ProgressIndicator

Finally, these are some dependency upgrades in JavaFX 17:
- Update Mesa 3-D Headers to version 21.0.3
- Update GStreamer to version 1.18.3
- Update glib to version 2.66.7
- Update GStreamer to version 1.18.4
- Update to 610.2 version of WebKit
- Update ICU4C to version 68.2
- Update libxml2 to version 2.9.12

A more comprehensive list of all the changes in JavaFX 17 can be found on [Github](https://github.com/openjdk/jfx/blob/master/doc-files/release-notes-17.md).

Kudos go to the fine people at [Gluon](https://gluonhq.com) who took care of the bulk of the work on JavaFX 17. Do check their [JavaFX Long Term Support](https://gluonhq.com/services/javafx-support/) services.