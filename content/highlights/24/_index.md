---
title: "JavaFX 24 Highlights"
section: "highlights"
styleclass: "content"
---
# JavaFX 24 Highlights

JavaFX version 24 has been released. We've tailored down some of the most exciting parts of the release in this document.

## Important Changes

### JavaFX 24 Requires JDK 22 or Later

JavaFX 24 is compiled with `--release 22` and thus requires JDK 22 or later in order to run. If you attempt to run with an older JDK, the Java launcher will exit with an error message indicating that the `javafx.base` module cannot be read.

See [JDK-8340003](https://bugs.openjdk.org/browse/JDK-8340003) for more information.

### JavaFX Applications Must Use `--enable-native-access`

Running a JavaFX application on JDK 24 will produce a warning from each of the three JavaFX modules that rely on native access, due to the changes specified in [JEP 472](https://openjdk.org/jeps/472). Each warning will include the following message:

```
WARNING: Restricted methods will be blocked in a future release unless native access is enabled
```

In order to suppress the warning now, and to be able to run your application at all in a subsequent version of the JDK, you need to explicitly enable native access for all modules that need it. This is done by passing `--enable-native-access=<list-of-modules>` to `java` on the command line, listing the modules that you grant native access. This list of modules includes `javafx.graphics` and, optionally, `javafx.media` and `javafx.web`, if your application uses those modules.

For example:

```
java --enable-native-access=javafx.graphics,javafx.media,javafx.web
```

See [JDK-8347744](https://bugs.openjdk.org/browse/JDK-8347744) for more information.

### The `jdk.jsobject` Module is Now Included with JavaFX

The `jdk.jsobject` module, which is used by JavaFX WebView applications, is now included with JavaFX, replacing the JDK module of the same name. The `jdk.jsobject` module is deprecated as of JDK 24, and will be removed in a future release of the JDK.

To facilitate the transition, `jdk.jsobject` is now an upgradable module in the JDK. This means that the version of `jdk.jsobject` delivered with JavaFX can be used in place of the one in the JDK to avoid the compiler warning. This can be done as follows:

Go through [JavaFX 24 release notes](https://github.com/openjdk/jfx/blob/jfx24/doc-files/release-notes-24.md) or [JDK-8337280](https://bugs.openjdk.org/browse/JDK-8337280) for more information.

### Pluggable Image Loading via `javax.imageio`

JavaFX 24 supports the Java Image I/O API, allowing applications to use third-party image loaders in addition to the built-in image loaders.
This includes the ability to use variable-density image loaders for formats like SVG. When an image is loaded using a variable-density image loader, JavaFX rasterizes the image with the screen's DPI scaling.

Applications that want to use this feature can use existing open-source Image I/O extension libraries, or register a custom Image I/O service provider instance with the `IIORegistry` class. 
Refer to the Java [Image I/O documentation](https://docs.oracle.com/en/java/javase/23/docs/api/java.desktop/javax/imageio/package-summary.html) for more information.

See [JDK-8306707](https://bugs.openjdk.org/browse/JDK-8306707) for more information.

### `ScrollPane` Consumes Navigation Keys Only When It Has Direct Focus

`ScrollPane` now only responds to key events when it is the active focus owner. This ensures that custom controls and other UI elements work correctly inside a `ScrollPane`, providing a more consistent and intuitive navigation experience.

Applications that prefer the previous behavior, where `ScrollPane` always reacts to arrow keys and other navigational inputs, can manually restore it by adding an event handler. See [this note](https://github.com/openjdk/jfx/blob/jfx24/doc-files/notes/24/JDK-8340852-ScrollPane.md) for an example of how to do this.

See [JDK-8340852](https://bugs.openjdk.org/browse/JDK-8340852) for more information.

## Removed Features and Options

### JavaFX No Longer Supports Running With a Security Manager

The Java Security Manager has been permanently disabled in JDK 24 via [JEP 486](https://openjdk.org/jeps/486).

Likewise, as of JavaFX 24, it is no longer possible to run JavaFX applications with a security manager enabled. This is true even if you run your application on an older JDK that still supports the security manager.

The following exception will be thrown when the JavaFX runtime is initialized with the Security Manager enabled:

> NOTE: UnsupportedOperationException: JavaFX does not support running with the Security Manager

See [JDK-8341090](https://bugs.openjdk.org/browse/JDK-8341090) for more information.

## Known Issues

### JavaFX Warning Printed for Use of Terminally Deprecated Methods in `sun.misc.Unsafe`

Running a JavaFX application on JDK 24 will produce a warning the first time any UI Control or complex shape is rendered:

```
WARNING: A terminally deprecated method in sun.misc.Unsafe has been called
...
WARNING: sun.misc.Unsafe::allocateMemory will be removed in a future release
```

To disable this warning, pass `--sun-misc-unsafe-memory-access=allow` to `java` on the command line. For example:

```
java --sun-misc-unsafe-memory-access=allow
```

This will be fixed in a subsequent version of JavaFX, after which time this flag will no longer be needed.

See [JDK-8345121](https://bugs.openjdk.org/browse/JDK-8345121) for more information.

Exciting features:
- New APIs:
  - InputMap is now public API as an Incubator
  - Focus traversal API is now public for use in custom controls

- New Features:
  - A new RichTextArea Control is now in Incubator
  - Support "@1x" image naming convention as fallback
  - Support pluggable image loading via javax.imageio

Improvements:
- Tree-structural pseudo-classes are now supported in JavaFX CSS

The community came together to fix 57 bugs in the last 6 months. Following are major bug-fixes that went into JavaFX 24:

- Fix for application window not always activated on macOS 15
- Fix for css transition not started when initial value was not specified
- Fix for infinite loop occurs while resolving lookups
- Fix for IOOBE when adding data to a Series of a BarChart that already contains data

Finally, these are some dependency upgrades in JavaFX 24:
- Update libFFI to 3.4.6
- Update Glib to 2.82.4
- Update GStreamer to 1.24.10
- Update WebKit to 619.1
- Update libxslt to 1.1.42

A more comprehensive list of all the changes in JavaFX 24 can be found on [Github](https://github.com/openjdk/jfx/blob/jfx24/doc-files/release-notes-24.md).

Kudos go to the fine people at [Gluon](https://gluonhq.com) who took care of the bulk of the work on JavaFX 24. Do check their [JavaFX Long Term Support](https://gluonhq.com/services/javafx-support/) services.
