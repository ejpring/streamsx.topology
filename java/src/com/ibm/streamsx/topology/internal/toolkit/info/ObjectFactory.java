//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.2.8-b130911.1802 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2016.09.12 at 01:06:02 PM PDT 
//


package com.ibm.streamsx.topology.internal.toolkit.info;

import javax.xml.bind.JAXBElement;
import javax.xml.bind.annotation.XmlElementDecl;
import javax.xml.bind.annotation.XmlRegistry;
import javax.xml.namespace.QName;


/**
 * This object contains factory methods for each 
 * Java content interface and Java element interface 
 * generated in the com.ibm.streamsx.topology.toolkit.info package. 
 * <p>An ObjectFactory allows you to programatically 
 * construct new instances of the Java representation 
 * for XML content. The Java representation of XML 
 * content can consist of schema derived interfaces 
 * and classes representing the binding of schema 
 * type definitions, element declarations and model 
 * groups.  Factory methods for each of these are 
 * provided in this class.
 * 
 */
@XmlRegistry
public class ObjectFactory {

    private final static QName _Library_QNAME = new QName("http://www.ibm.com/xmlns/prod/streams/spl/common", "library");
    private final static QName _JavaOpLibrary_QNAME = new QName("http://www.ibm.com/xmlns/prod/streams/spl/common", "javaOpLibrary");
    private final static QName _ToolkitInfoModel_QNAME = new QName("http://www.ibm.com/xmlns/prod/streams/spl/toolkitInfo", "toolkitInfoModel");

    /**
     * Create a new ObjectFactory that can be used to create new instances of schema derived classes for package: com.ibm.streamsx.topology.toolkit.info
     * 
     */
    public ObjectFactory() {
    }

    /**
     * Create an instance of {@link ToolkitInfoModelType }
     * 
     */
    public ToolkitInfoModelType createToolkitInfoModelType() {
        return new ToolkitInfoModelType();
    }

    /**
     * Create an instance of {@link ResourcesType }
     * 
     */
    public ResourcesType createResourcesType() {
        return new ResourcesType();
    }

    /**
     * Create an instance of {@link MessageSetType }
     * 
     */
    public MessageSetType createMessageSetType() {
        return new MessageSetType();
    }

    /**
     * Create an instance of {@link IncludeType }
     * 
     */
    public IncludeType createIncludeType() {
        return new IncludeType();
    }

    /**
     * Create an instance of {@link IdentityType }
     * 
     */
    public IdentityType createIdentityType() {
        return new IdentityType();
    }

    /**
     * Create an instance of {@link SabFilesType }
     * 
     */
    public SabFilesType createSabFilesType() {
        return new SabFilesType();
    }

    /**
     * Create an instance of {@link ExcludeType }
     * 
     */
    public ExcludeType createExcludeType() {
        return new ExcludeType();
    }

    /**
     * Create an instance of {@link DependenciesType }
     * 
     */
    public DependenciesType createDependenciesType() {
        return new DependenciesType();
    }

    /**
     * Create an instance of {@link LangType }
     * 
     */
    public LangType createLangType() {
        return new LangType();
    }

    /**
     * Create an instance of {@link LibraryType }
     * 
     */
    public LibraryType createLibraryType() {
        return new LibraryType();
    }

    /**
     * Create an instance of {@link JavaOpLibraryType }
     * 
     */
    public JavaOpLibraryType createJavaOpLibraryType() {
        return new JavaOpLibraryType();
    }

    /**
     * Create an instance of {@link JavaOpManagedLibraryType }
     * 
     */
    public JavaOpManagedLibraryType createJavaOpManagedLibraryType() {
        return new JavaOpManagedLibraryType();
    }

    /**
     * Create an instance of {@link ToolkitDependencyType }
     * 
     */
    public ToolkitDependencyType createToolkitDependencyType() {
        return new ToolkitDependencyType();
    }

    /**
     * Create an instance of {@link DescriptionType }
     * 
     */
    public DescriptionType createDescriptionType() {
        return new DescriptionType();
    }

    /**
     * Create an instance of {@link ManagedLibraryType }
     * 
     */
    public ManagedLibraryType createManagedLibraryType() {
        return new ManagedLibraryType();
    }

    /**
     * Create an instance of {@link UriType }
     * 
     */
    public UriType createUriType() {
        return new UriType();
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link LibraryType }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://www.ibm.com/xmlns/prod/streams/spl/common", name = "library")
    public JAXBElement<LibraryType> createLibrary(LibraryType value) {
        return new JAXBElement<LibraryType>(_Library_QNAME, LibraryType.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link JavaOpLibraryType }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://www.ibm.com/xmlns/prod/streams/spl/common", name = "javaOpLibrary")
    public JAXBElement<JavaOpLibraryType> createJavaOpLibrary(JavaOpLibraryType value) {
        return new JAXBElement<JavaOpLibraryType>(_JavaOpLibrary_QNAME, JavaOpLibraryType.class, null, value);
    }

    /**
     * Create an instance of {@link JAXBElement }{@code <}{@link ToolkitInfoModelType }{@code >}}
     * 
     */
    @XmlElementDecl(namespace = "http://www.ibm.com/xmlns/prod/streams/spl/toolkitInfo", name = "toolkitInfoModel")
    public JAXBElement<ToolkitInfoModelType> createToolkitInfoModel(ToolkitInfoModelType value) {
        return new JAXBElement<ToolkitInfoModelType>(_ToolkitInfoModel_QNAME, ToolkitInfoModelType.class, null, value);
    }

}